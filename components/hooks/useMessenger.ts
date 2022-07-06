import { useSelector } from 'react-redux';
import { useFirebaseConnect, useFirebase, isLoaded } from 'react-redux-firebase';
import { State } from '@/store';

import MainProtected from '@/api/main-protected';

import { Query, ServiceChatId } from '@/store/reducers/firebase';

import { IChats, ISupplier, IUser } from '@/interfaces/firebase';

import { getLastSlashParam } from '@/utils/regex';
import { UserType } from '@/interfaces/settings';
import { textMessageLimit } from '@/utils/firebase';
import { truncateText } from '@/utils/words';

export interface IChatNotificationProps {
  userFirebaseUid: string;
  chatFirebaseUid?: string;
  isServiceChat: boolean;
}
export interface ISupplierWebReplyProps {
  userFirebaseUid: string;
  chatFirebaseUid: string;
  supplierId: string;
  supplierName: string;
  text: string;
}

export interface IMerchantWebReplyProps {
  userFirebaseUid: string;
  chatFirebaseUid: string;
  text: string;
}

export interface ITokenSupplierWebReplyProps {
  chatFirebaseUid: string;
  supplierId: string;
  supplierName: string;
  text: string;
}
export interface ISupplierDocumentProps {
  userFirebaseUid: string;
  chatFirebaseUid: string;
  supplierName: string;
  attachments: {
    filename: string,
    url: string
  }[];
}

export interface IMerchantDocumentProps {
  userFirebaseUid: string;
  chatFirebaseUid: string;
  name: string;
  attachments: {
    filename: string,
    url: string
  }[];
}

export interface IServiceChatMessageProps {
  userFirebaseUid: string;
  text?: string;
  image?: {
    thumbnail: string;
    url: string;
  }
}

export interface ISupportReplyProps {
  userFirebaseUid: string;
  supportUsername: string;
  text: string;
}

export type IWebReplyMessage = ISupplierWebReplyProps
| IMerchantWebReplyProps | ITokenSupplierWebReplyProps | IServiceChatMessageProps;

export default () => {
  const firebase = useFirebase();
  const mainProtectedApi = new MainProtected();

  const readFirebaseUser = (userFirebaseUid: string) => {
    useFirebaseConnect(Query.getUser(userFirebaseUid));
  };

  const getFirebaseUser = (userFirebaseUid: string) => {
    readFirebaseUser(userFirebaseUid);
    return useSelector<State, IUser>(
      (state) => (state.firebase.data?.app?.users?.[userFirebaseUid]),
    );
  };

  const readFirebaseSupplier = (supplierId: string) => {
    useFirebaseConnect(Query.getSupplier(supplierId));
  };

  const getFirebaseSupplier = (supplierId: string) => {
    readFirebaseSupplier(supplierId);
    return useSelector<State, ISupplier>(
      (state) => (state.firebase.data?.app?.suppliers?.[supplierId]),
    );
  };

  const isUserChatsLoaded = (firebaseUid: string) => {
    const user = getFirebaseUser(firebaseUid);
    const chats = user?.supplierChats;
    // supplierChats are undefined for newly self-onboard suppliers
    return (user && isLoaded(chats)) || (user && user?.supplierChats === undefined);
  };

  const isServiceChatLoaded = (firebaseUid: string) => {
    const user = getFirebaseUser(firebaseUid);
    const chats = user?.serviceChat;
    // supplierChats are undefined for newly self-onboard suppliers
    return (user && isLoaded(chats)) || (user && user?.serviceChat === undefined);
  };

  const readSupplierChats = (chatFirebaseUid: string, paginationLimit: number) => {
    useFirebaseConnect(
      [
        Query.getSupplierChatMessages(chatFirebaseUid, paginationLimit),
        Query.getSupplierChats(chatFirebaseUid),
      ],
    );
  };

  const getSupplierChats = (chatFirebaseUid: string, paginationLimit: number) => {
    readSupplierChats(chatFirebaseUid, paginationLimit);
    return useSelector<State, IChats>(
      (state) => (state.firebase.data.app?.supplierChats),
    );
  };

  const readSupplierChat = (chatFirebaseUid: string) => {
    useFirebaseConnect(
      [
        Query.getSupplierChats(chatFirebaseUid),
      ],
    );
  };

  const getSupplierChat = (chatFirebaseUid: string) => {
    readSupplierChat(chatFirebaseUid);
    return useSelector<State, IChats>(
      (state) => (state.firebase.data.app?.supplierChats),
    );
  };

  const updateChatNotification = ({
    userFirebaseUid,
    chatFirebaseUid,
    isServiceChat,
  }: IChatNotificationProps) => {
    const { path, template } = (
      !isServiceChat
      && chatFirebaseUid
      && chatFirebaseUid !== ServiceChatId)
      ? Query.getChatNotificationTemplate(userFirebaseUid, chatFirebaseUid)
      : Query.getServiceChatNotificationTemplate(userFirebaseUid);

    return firebase.update(path, template);
  };

  const sendUserDocument = (
    props : ISupplierDocumentProps | IMerchantDocumentProps,
    userType: UserType,
  ) => {
    switch (userType) {
      case UserType.Supplier:
        sendSupplierDocument(props as ISupplierDocumentProps);
        break;
      case UserType.Merchant:
        sendMerchantDocument(props as IMerchantDocumentProps);
        break;
      default:
        break;
    }
  };

  const sendSupplierDocument = ({
    userFirebaseUid,
    chatFirebaseUid,
    supplierName,
    attachments,
  }: ISupplierDocumentProps) => {
    const { chatPath, template } = Query.getSupplierDocumentTemplate(
      userFirebaseUid,
      chatFirebaseUid,
      supplierName,
      attachments,
    );

    const requests = [
      firebase.push(chatPath, template),
      updateChatNotification({ userFirebaseUid, chatFirebaseUid, isServiceChat: false }),
    ];

    return Promise.all(requests);
  };

  const sendMerchantDocument = ({
    userFirebaseUid,
    chatFirebaseUid,
    name,
    attachments,
  }: IMerchantDocumentProps) => {
    const { chatPath, template } = Query.getMerchantDocumentTemplate(
      userFirebaseUid,
      chatFirebaseUid,
      name,
      attachments,
    );

    const requests = [
      firebase.push(chatPath, template),
      updateChatNotification({ userFirebaseUid, chatFirebaseUid, isServiceChat: false }),
    ];

    return Promise.all(requests);
  };

  const sendSupplierWebReply = ({
    userFirebaseUid,
    chatFirebaseUid,
    supplierId,
    supplierName,
    text,
  }: ISupplierWebReplyProps) => {
    const truncatedText = truncateText(text, textMessageLimit);
    const { chatPath, template } = Query.getSupplierWebReplyTemplate(
      userFirebaseUid,
      chatFirebaseUid,
      supplierId,
      supplierName,
      truncatedText,
    );

    const requests = [
      firebase.push(chatPath, template),
      updateChatNotification({ userFirebaseUid, chatFirebaseUid, isServiceChat: false }),
    ];

    return Promise.all(requests);
  };

  const sendMerchantWebReply = ({
    userFirebaseUid,
    chatFirebaseUid,
    text,
  }: IMerchantWebReplyProps) => {
    const truncatedText = truncateText(text, textMessageLimit);
    const { chatPath, template } = Query.getMerchantWebReplyTemplate(
      userFirebaseUid,
      chatFirebaseUid,
      truncatedText,
    );

    const requests = [
      firebase.push(chatPath, template),
      updateChatNotification({ userFirebaseUid, chatFirebaseUid, isServiceChat: false }),
    ];

    return Promise.all(requests);
  };

  const sendTokenSupplierWebReply = ({
    chatFirebaseUid,
    supplierId,
    supplierName,
    text,
  }: ITokenSupplierWebReplyProps) => {
    const truncatedText = truncateText(text, textMessageLimit);
    const { chatPath, template } = Query.getTokenSupplierWebReplyTemplate(
      chatFirebaseUid,
      supplierId,
      supplierName,
      truncatedText,
    );

    const requests = [
      firebase.push(chatPath, template),
    ];

    return Promise.all(requests);
  };

  const sendServiceChatMessage = ({
    userFirebaseUid,
    text,
    image,
  }: IServiceChatMessageProps) => {
    const truncatedText = truncateText(text || '', textMessageLimit);
    const { chatPath, template } = (image)
      ? Query.getServiceChatImageTemplate(userFirebaseUid, image.thumbnail, image.url)
      : Query.getServiceChatTextTemplate(userFirebaseUid, truncatedText);

    const requests = [
      firebase.push(chatPath, template),
      updateChatNotification({ userFirebaseUid, isServiceChat: true }),
    ];

    return Promise.all(requests).then(([message]) => {
      const messagePath = message.ref.toJSON().toString();
      const messageId = getLastSlashParam(messagePath);

      if (image && messageId) {
        return mainProtectedApi.moveImageToServiceChat(userFirebaseUid, messageId, image.url);
      }

      return null;
    });
  };

  const sendSupportReplyMessage = ({
    userFirebaseUid,
    supportUsername,
    text,
  }: ISupportReplyProps) => {
    const truncatedText = truncateText(text || '', textMessageLimit);
    const { chatPath, template } = Query.getSupportReplyTemplate(
      userFirebaseUid,
      supportUsername,
      truncatedText,
    );

    const requests = [
      firebase.push(chatPath, template),
    ];

    Promise.all(requests);
  };

  return {
    firebase,
    isLoaded,
    getFirebaseUser,
    getFirebaseSupplier,
    isUserChatsLoaded,
    isServiceChatLoaded,
    getSupplierChats,
    getSupplierChat,
    sendUserDocument,
    updateChatNotification,
    sendSupplierWebReply,
    sendMerchantWebReply,
    sendTokenSupplierWebReply,
    sendServiceChatMessage,
    sendSupportReplyMessage,
  };
};

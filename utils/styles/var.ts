const vars = {
  screen_width: {
    desktop3: 1440,
    desktop2: 1280,
    desktop: 1024,
    tablet: 720, // reduced size to support desktop splits
    mobile: 320,
  },
  z_index: {
    toast: 9999,
  },
  components: {
    drawer: {
      mainPane: {
        default: {
          width: 600,
        },
        equalPart: {
          width: 536,
        },
      },
      onlyOnePane: {
        width: 600,
      },
      secondaryPane: {
        default: {
          width: 345,
        },
        equalPart: {
          width: 509,
        },
      },
      biggerMainPane: {
        desktop: 900,
        laptop: 900,
        tablet: 600,
      },
    },
    mainHeader: {
      height: 64,
      width: 70,
    },
    contentHeader: {
      height: 78,
    },
    sideBarHeader: {
      height: 77,
    },
    sideBar: {
      width: 350,
    },
    drawerHeader: {
      height: 80,
    },
    drawerFooter: {
      height: 88,
    },
    modal: {
      default: {
        width: 526,
      },
    },
  },
  chats: {
    contentHeader: {
      height: 129,
    },
    stickyDate: {
      height: 31,
    },
    messageHeader: {
      height: 59,
    },
  },
  items: {
    contentHeader: {
      height: 129,
    },
  },
  orders: {
    contentHeader: {
      height: 70,
    },
  },
  manageItems: {
    contentHeader: {
      height: 50,
    },
  },
  settings: {
    actionHeader: {
      height: 80,
    },
    historyHeader: {
      height: 60,
    },
    historySearchHeader: {
      height: 82,
    },
  },
};

export default vars;

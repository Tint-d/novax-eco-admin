import React from "react";

const checkPageAccess = (path, permittedPages) => {
  let isUserAuthorized = false;
  let url = path.replace(/\//g, "");
  let allowedActions = [];
  let allowedActionsName = [];

  if (Array.isArray(permittedPages) && permittedPages.length > 0) {
    isUserAuthorized = permittedPages.find(
      (page) => page.modulePageUrl === url
    );

    permittedPages.forEach((element) => {
      if (element.modulePageUrl === url) {
        if (Array.isArray(element.actions) && element.actions.length > 0) {
          element.actions.forEach((item) => {
            allowedActionsName.push(item.actionUrl);
          });
        }
      }
    });
  }

  return {
    isUserAuthorized,
    allowedActionsName,
  };
};

export default checkPageAccess;

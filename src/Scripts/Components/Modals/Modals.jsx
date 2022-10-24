import $ from "jquery";
// Copied from kamernet\proj\Qmulus.Kamernet.StaticResources\Scripts\redesign\Components\Modals.js (some changes was made to make it work with react)

function init(modalId, modalCaller) {
  if (modalId != null && modalId.indexOf("#") === -1) {
    modalId = "#" + modalId;
  }
  if (modalId) {
    if (
      modalCaller != null &&
      !Modal.initialized.callers.includes(modalCaller)
    ) {
      //Open modal from modalCaller
      $(modalCaller).click(function () {
        Modal.hideAllModals();
        $(modalId).addClass("visible");
        $("html").addClass("with-modal");
      });
      Modal.initialized.callers.push(modalCaller);
    }
    if (!Modal.initialized.modals.includes(modalId)) {
      //Select first child as a working container
      //TODO: See if it can be improved:: what if the first child is an invisible element? like.. <style>?? haha +3 hours of work to figure this out// temp workaround
      var container = $(modalId).children().has("div span");
      if (container.length === 0) container = $(modalId).children();
      //Set relative position
      container.addClass("position-relative");
      //Add close-icon
      container.append(
        $(
          '<div class="modal-close-icon"><i class="icon-s cross color-background"></i></div>'
        )
      );

      $(modalId).click(function (e) {
        //Hide if clicked outside content or on close-icon
        //if (!container.is(e.target) && container.has(e.target).length === 0 || e.target.className === "modal-close-icon")
        if ($(e.target).hasClass("modal-background")) Modal.hide(modalId);
      });

      Modal.initialized.modals.push(modalId);
    }
  } else {
    //Parse all elements that have data-modal-id="" attribute and initialize modals and callers from it
    $("*[data-modal-id]").each(function (_, modalCaller) {
      //Get modal-id from data-modal-id="" HTML attribute
      //call self init the modal
      init(modalCaller.dataset.modalId, modalCaller);
    });
  }
  $(document).trigger("Modal.initialized", true);
}

export const Modal = {
  initialized: {
    modals: [],
    callers: [],
  },
  hideAllModals: function () {
    var _this = this;
    this.initialized.modals.forEach(function (modal) {
      _this.hide(modal);
    });
  },
  hide: function (modalId) {
    if (modalId != null && modalId.indexOf("#") === -1) {
      modalId = "#" + modalId;
    }
    $(modalId).removeClass("visible");
    $("html").removeClass("with-modal");
  },
  show: function (modalId) {
    if (modalId != null && modalId.indexOf("#") === -1) {
      modalId = "#" + modalId;
    }
    this.hideAllModals();
    $(modalId).addClass("visible");
    $("html").addClass("with-modal");
  },
  init,
};

export function initModal() {
  setTimeout(() => {
    Modal.init();

    $(".modal-close-icon").click(function () {
      Modal.hideAllModals();
    });
  }, 600); // this timeout is required because the modal elements are not ready right away.
}

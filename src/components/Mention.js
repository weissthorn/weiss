const Mention = {
  // @Required @Unique
  // plugin name
  name: 'mention',
  // @Required
  // data display
  display: 'command',

  // @Options
  title: 'Mention user',
  buttonClass: '',
  innerHTML: '',

  add: function (core, targetElement) {
    const context = core.context;
    context.customCommand_2 = {
      targetButton: targetElement
    };
  },
  active: function (element) {
    if (!element) {
      this.util.removeClass(
        this.context.customCommand_2.targetButton,
        'active'
      );
    } else if (
      /^mark$/i.test(element.nodeName) &&
      element.style.backgroundColor.length > 0
    ) {
      this.util.addClass(this.context.customCommand_2.targetButton, 'active');
      return true;
    }

    return false;
  },
  action: function () {
    if (
      !this.util.hasClass(this.context.customCommand_2.targetButton, 'active')
    ) {
      const newNode = this.util.createElement('mark');
      newNode.setAttribute('contenteditable', true);
      newNode.style.backgroundColor = '#ededed';
      newNode.style.padding = '3px';
      newNode.style.borderRadius = '5px';
      this.nodeChange(
        newNode,
        ['background-color', 'padding', 'border-radius'],
        null,
        null
      );
    } else {
      this.nodeChange(
        null,
        ['background-color', 'padding', 'border-radius'],
        ['mark'],
        true
      );
    }
  }
};

export default Mention;

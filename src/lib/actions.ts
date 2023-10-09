function loadWidget(target: HTMLElement, config: JSComponentConfig) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (target.fastCommentsWidgetInstance) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target.fastCommentsWidgetInstance.destroy();
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  target.fastCommentsWidgetInstance = window[config.windowName](target, config.widgetConfig);
}

function mountComponent(target: HTMLElement, config: JSComponentConfig) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (window[config.windowName]) {
    loadWidget(target, config);
  } else {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = config.src;
    script.onload = function() {
      loadWidget(target, config);
    };
    (document.head || document.body).appendChild(script);
  }
  return true;
}

export interface JSComponentConfig {
  name: string;
  src: string;
  windowName: string;
  widgetConfig: unknown;
  waitForCustomTarget?: true;
  customTarget?: HTMLElement;
}

export default function JSComponent(node: HTMLElement, config: JSComponentConfig) {
  const target = config.customTarget ? config.customTarget : node;
  if (!config.waitForCustomTarget || target) {
    mountComponent(target, config);
  }

  return {
    update(newConfig: JSComponentConfig) {
      mountComponent(target, newConfig);
    },

    destroy() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (target.fastCommentsWidgetInstance) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        target.fastCommentsWidgetInstance.destroy();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete target.fastCommentsWidgetInstance;
      }
    }
  };
}
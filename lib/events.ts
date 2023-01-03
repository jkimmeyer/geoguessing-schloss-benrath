// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subscribe = (eventName: string, listener: any): void => {
  document.addEventListener(eventName, listener)
  console.log("added")
}

const publish = (eventName: string, data: object): void => {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const unsubscribe = (eventName: string, listener: any): void => {
  document.removeEventListener(eventName, listener);
  console.log("removed")
}


export { subscribe, publish, unsubscribe };

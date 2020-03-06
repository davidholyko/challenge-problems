// write a singleton

const Singleton = {};

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

const isSameInstance = instance1 === instance2;

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never;

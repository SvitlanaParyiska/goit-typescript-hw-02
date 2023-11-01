/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const userOnline: KeyValuePair<string, boolean> = {
  key: "isOnline",
  value: true,
};

const userName: KeyValuePair<string, string> = {
  key: "age",
  value: "Make",
};

console.log("userMaritalStatus:", userOnline);
console.log("userAge:", userName);
export {};

{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhanker Mahbub",
      age: 100,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(20, 30);

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Persian", email: "a@gmail.com" },
  ];
}

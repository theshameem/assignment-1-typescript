# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics are type placeholders that get determined when a function or component gets called.

Generics help with:

- Code reusability
- Type safety
- Maintaining consistent relationships between inputs and outputs

Let's dive into an example:

```ts
function identifyType<T>(input: T): T {
  return input;
}

identifyType("string"); // "string"
identifyType(123); // 123
```

Here, `T` works as a placeholder. Whatever type we pass as an argument becomes the type of `T`.

---

Generics are heavily useful in reusable components (especially in React).

A common real-world example of generics is modeling API responses, because APIs often return a specific structure where the `data` field can contain different types.

```ts
type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type User = {
  id: number;
  name: string;
  email: string;
};

const userResponse: ApiResponse<User> = {
  success: true,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Shameem Alam",
    email: "shameem.alam@gmail.com"
  }
};

console.log(userResponse.data.name); // Shameem Alam
```

Here, `ApiResponse<T>` is reusable, and `T` determines the type of the `data` field.
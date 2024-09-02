import { FormWrapper } from "../components/FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFromProps = UserData & {
  updateFields(fields: Partial<UserData>): void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFromProps) {
  return (
    <FormWrapper title="User details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}

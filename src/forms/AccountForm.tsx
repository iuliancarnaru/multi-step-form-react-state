import { FormWrapper } from "../components/FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFromProps = AccountData & {
  updateFields(fields: Partial<AccountData>): void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFromProps) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

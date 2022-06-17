export interface UseLoginParams {
  onSuccess: () => void;
  onFailure: (e: any) => void;
}

export interface UseLoginAction {
  username: string | undefined;
  password: string | undefined;
  handleUsernameChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
  handleSubmit: () => Promise<void>;
  ready: boolean;
}

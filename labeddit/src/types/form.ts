export interface TLogin {
    email: string,
    password: string
}

export interface TSignup {
    username: string,
    email: string,
    password: string,
    acceptEmail: boolean
}

export interface TLoginFormContext {
    form: TLogin;
    errors: { [key: string]: string };
    onChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    login: (event: React.FormEvent) => void;
    loading: boolean; 
  }

export interface tSignupFormContext {
    form: TSignup;
    errors: { [key: string]: string };
    onChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    signup: (event: React.FormEvent) => void;
    loading: boolean;
  }
  
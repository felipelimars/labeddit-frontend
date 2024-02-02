import { z, ZodError } from 'zod';

export const loginValidationSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

export type LoginFormData = z.infer<typeof loginValidationSchema>;
export type LoginValidationResult = ZodError<LoginFormData>;

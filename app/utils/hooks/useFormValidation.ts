import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, Mode, useForm } from "react-hook-form";
import { ZodType } from "zod";

const useFormValidation = <T extends FieldValues>(
  schema: ZodType<T>,
  mode: Mode,
  defaultValue?: any
) => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    reset,
    formState: { errors, dirtyFields },
    watch,
    setError,
  } = useForm<T>({
    mode: mode,
    resolver: zodResolver(schema),
    defaultValues: defaultValue,
    values: defaultValue,
  });

  return {
    handleSubmit,
    register,
    errors,
    setValue,
    control,
    dirtyFields,
    reset,
    watch,
    setError,
  };
};

export default useFormValidation;

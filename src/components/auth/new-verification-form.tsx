"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success ?? error) return;

    if (!token) {
      setError("الرمز مفقود!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("حدث خطأ ما!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="تأكيد بريدك الإلكتروني"
      descriptionLabel="قم بتأكيد بريدك الإلكتروني للمتابعة!"
      backButtonLabel="العودة إلى تسجيل الدخول"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

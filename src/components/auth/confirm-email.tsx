import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VerifyMagicLinkEmailProps {
  confirmLink?: string;
}

export const VerifyMagicLinkEmail = ({
  confirmLink,
}: VerifyMagicLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>تحقق من بريدك الإلكتروني.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>تحقق من بريدك الإلكتروني.</Heading>
          <Link
            href={confirmLink}
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "16px",
            }}
          >
            اضغط هنا لتأكيد بريدك الإلكتروني.
          </Link>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            إذا لم تكن قد حاولت التحقق من بريدك الإلكتروني، يمكنك تجاهل هذا البريد بأمان.
          </Text>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            تلميح: يمكنك تعيين كلمة مرور دائمة في الإعدادات.
          </Text>
          <Text style={footer}>
            <Link
              href={`https://nexa-starter.vercel.app`}
              target="_blank"
              style={{ ...link, color: "#898989" }}
            >
              https://nexa-starter.vercel.app
            </Link>
            ، القالب لبدء مشروعك التالي.
            <br /> نقطة انطلاق نظيفة لفكرتك الكبيرة القادمة.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#0a0a0a",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

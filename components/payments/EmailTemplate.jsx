// app/emails/EmailTemplate.tsx
import {
  Body,
  Container,
  Head,
  Html,
  Text,
} from "@react-email/components";


export default function EmailTemplate({ message }) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

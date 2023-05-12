import { Typography } from "@components/Texts/Typography";
import { Container } from "./styles";
import { ButtonContained } from "@components/Buttons/ButtonContained";
import { getPixel } from "@globals/helpers/getPixel";
import { BackgroundPng } from "@globals/assets";

export function SignIn() {
  return (
    <>
      <Container source={BackgroundPng}>
        <Typography
          marginTop={getPixel.sizeVertical(230)}
          weight="bold"
          color="primary900"
          size="text-5xl"
        >
          Ignite Fleet
        </Typography>
        <Typography marginBottom={getPixel.sizeVertical(32)} color="gray100">
          Gestão de uso veículo
        </Typography>

        <ButtonContained
          width="100%"
          textWeight="medium"
          title="Entrar com o Google"
        />
      </Container>
    </>
  );
}

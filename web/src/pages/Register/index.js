import LayoutAuthenticate from '../../components/LayoutAuthenticate';
import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import { Link } from 'react-router-dom';

import * as S from './styles';

import content from './content';

const Register = () => {
  return (
    <S.Wrapper>
      <LayoutAuthenticate>
        <S.SectionForm>
          <form>
            <Title color="purple" customClass="title-form-login">
              Cadastrar
            </Title>
            {content.map(({ id, children, type, icon, alternativeText }) => (
              <InputForm
                key={id}
                icon={icon}
                type={type}
                alternativeText={
                  !!alternativeText && {
                    url: alternativeText.url,
                    name: alternativeText.name,
                  }
                }
              >
                {children}
              </InputForm>
            ))}
            <Button sie="medium">Entrar</Button>
            <S.Alternative>
              Não tem conta? <Link to="/register">criar conta</Link>
            </S.Alternative>
          </form>
        </S.SectionForm>
      </LayoutAuthenticate>
    </S.Wrapper>
  );
};

export default Register;

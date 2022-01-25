import EnrollmentData from "@/interfaces/enrollment";
import FakerInterface from "@/interfaces/FakerAPI";
import { fakerBr } from "js-brasil";

export default class FakerAdapter implements FakerInterface {
  generateUserCredentials(): { email: string; password: string; } {
    return {
      email: fakerBr.email(),
      password: fakerBr.senha()
    };
  }

  generateEnrollment(userId: number): EnrollmentData {
    const pessoa = fakerBr.pessoa();
    
    return {
      name: pessoa.nome,
      cpf: pessoa.cpf,
      birthday: pessoa.dataNascimento,
      phone: pessoa.telefone,
      userId: userId,
      isOnlinePlan: null,
      hasHotel: null,
      roomId: null,
      payentConfirmed: null,
      address: {
        cep: pessoa.endereco.cep,
        street: pessoa.endereco.logradouro,
        city: pessoa.endereco.cidade,
        state: pessoa.endereco.estadoSigla,
        neighborhood: pessoa.endereco.bairro,
        number: pessoa.endereco.numbero,
        addressDetail: pessoa.endereco.complemento,
      }
    };
  }
}

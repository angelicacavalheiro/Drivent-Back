import ConflictError from "@/errors/ConflictError";

export default class RoomFullCapacity extends ConflictError {
  constructor() {
    super("Não há mais vagas disponíveis nesse quarto!");

    this.name = "RoomFullCapacity";
  }
}

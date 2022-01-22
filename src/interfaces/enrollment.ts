import AddressData from "@/interfaces/address";

interface EnrollmentData {
  name: string;
  cpf: string;
  birthday: string;
  address: AddressData;
  phone: string;
  userId: number;
  isOnlinePlan: boolean;
  hasHotel: boolean;
  payentConfirmed: boolean;
  roomId: number;
}

export default EnrollmentData;

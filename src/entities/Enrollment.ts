import CpfNotAvailableError from "@/errors/CpfNotAvailable";
import EnrollmentData from "@/interfaces/enrollment";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
  getRepository
} from "typeorm";
import Address from "@/entities/Address";
import Activities from "./Activity";

@Entity("enrollments")
export default class Enrollment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  birthday: string;

  @Column()
  phone: string;

  @Column()
  userId: number;

  @Column({ nullable: true })
  isOnlinePlan: boolean;

  @Column({ nullable: true })
  hasHotel: boolean;

  @Column({ nullable: true })
  payentConfirmed: boolean;

  @Column({ nullable: true })
  roomId: number;

  @OneToOne(() => Address, (address) => address.enrollment, { eager: true })
  address: Address;

  @ManyToMany(() => Activities, (activity) => activity.id, { eager: true })
  @JoinTable()
  activities: Activities[];

  populateFromData(data: EnrollmentData) {
    this.name = data.name;
    this.cpf = data.cpf;
    this.birthday = data.birthday;
    this.phone = data.phone;
    this.userId = data.userId;

    this.address ||= Address.create();
    const { address } = this;

    address.cep = data.address.cep;
    address.street = data.address.street;
    address.city = data.address.city;
    address.number = data.address.number;
    address.state = data.address.state;
    address.neighborhood = data.address.neighborhood;
    address.addressDetail = data.address.addressDetail;
  }

  populatePlanInfo(paymentData: EnrollmentData) {
    this.isOnlinePlan = paymentData.isOnlinePlan;
    this.hasHotel = paymentData.hasHotel;
    this.payentConfirmed = paymentData.payentConfirmed;
  }

  static async setNewPlan(paymentData: EnrollmentData) {
    const enrollment = await this.findOne({
      where: { userId: paymentData.userId },
    });

    enrollment.populatePlanInfo(paymentData);

    await enrollment.save();
  }

  static async createOrUpdate(data: EnrollmentData) {
    let enrollment = await this.findOne({ where: { cpf: data.cpf } });

    if (enrollment && enrollment.userId !== data.userId) {
      throw new CpfNotAvailableError(data.cpf);
    }

    enrollment ||= Enrollment.create();
    enrollment.populateFromData(data);
    await enrollment.save();

    enrollment.address.enrollmentId = enrollment.id;
    await enrollment.address.save();
  }

  static async getByUserIdWithAddress(userId: number) {
    return await this.findOne({ where: { userId } });
  }

  static async postUserInscription(enrollmentId: number, activitiesId: number) {
    //pegar a atividade
    const enrollment = await this.findOne({ where: { id: enrollmentId } });
    //pegar atividade
    const activityRepository = getRepository(Activities);
    const activity = await activityRepository.findOne({ where: { id: activitiesId } });
    //
    enrollment.activities.push(activity);
    await this.save(enrollment);

    return enrollment;
  }
}

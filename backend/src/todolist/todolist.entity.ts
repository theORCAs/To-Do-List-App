import { CreateDateColumn, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("todolist")
export class TodolistEntity {
    //Auto increment
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true, default: null })
    title: string;

    @Column({ type: "text", nullable: true, default: null })
    description: string;

    @Column({ type: "text", nullable: true, default: null })
    priority: string;

    @Column({ type: 'date', nullable: true, default: null })
    dueDate: Date;

    @CreateDateColumn({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdDate: Date;
}
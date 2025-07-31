import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  // Use 'imports' property for standalone component with Angular Material modules
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  // Personal information
  personalInfo = {
    name: 'Nguyễn Văn A',
    title: 'Full-Stack Developer',
    location: 'Hồ Chí Minh, Việt Nam',
    experience: '3+ năm kinh nghiệm',
    email: 'contact@example.com',
    phone: '+84 123 456 789'
  };

  // About description
  aboutDescription = `
    Tôi là một Full-Stack Developer đam mê công nghệ với hơn 3 năm kinh nghiệm 
    trong việc phát triển ứng dụng web hiện đại. Chuyên môn trong việc xây dựng 
    các ứng dụng responsive và user-friendly sử dụng các công nghệ tiên tiến như 
    Angular, React, Spring Boot và Node.js.
  `;

  // Technical skills
  technicalSkills = [
    { category: 'Frontend', skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'] },
    { category: 'Backend', skills: ['Spring Boot', 'Node.js', 'Express.js', 'Java', 'Python', 'REST API'] },
    { category: 'Database', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'DevOps', skills: ['Docker', 'AWS', 'Git', 'Jenkins', 'Linux'] }
  ];

  // Professional experience
  experiences = [
    {
      company: 'Công ty ABC Tech',
      position: 'Senior Full-Stack Developer',
      duration: '2022 - Hiện tại',
      description: 'Phát triển và bảo trì các ứng dụng web quy mô lớn, làm việc với team đa quốc gia.',
      achievements: [
        'Tối ưu hiệu suất ứng dụng, giảm 40% thời gian load',
        'Dẫn dắt team 5 developers trong dự án modernization',
        'Implement CI/CD pipeline, tăng 60% tốc độ deployment'
      ]
    },
    {
      company: 'Startup XYZ',
      position: 'Frontend Developer',
      duration: '2021 - 2022',
      description: 'Xây dựng từ đầu ứng dụng e-commerce với Angular và Material Design.',
      achievements: [
        'Phát triển responsive web app từ concept đến production',
        'Tích hợp payment gateway và notification system',
        'Collaborate với UX/UI team để tối ưu user experience'
      ]
    }
  ];

  // Education & Certifications
  education = [
    {
      degree: 'Cử nhân Công nghệ Thông tin',
      school: 'Đại học Bách Khoa TP.HCM',
      year: '2017 - 2021',
      gpa: 'GPA: 3.7/4.0'
    }
  ];

  certifications = [
    'AWS Certified Developer Associate',
    'Oracle Certified Professional Java SE',
    'Google Analytics Certified',
    'Scrum Master Certified'
  ];
}
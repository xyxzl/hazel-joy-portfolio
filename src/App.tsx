import { useEffect } from 'react'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  FileText,
  CalendarDays,
  MapPin,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa'

function App() {

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }

        })
      },
      {
        threshold: 0.12,
      }
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])


  return (
    <>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <nav className="nav-container">

          <div className="nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#internship">
              Experience
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#certifications">
              Certification
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </nav>

      </header>


      <main>


        {/* =========================
            HOME
        ========================= */}

        <section
          id="home"
          className="hero"
        >

          <div
            className="hero-content"
            data-reveal
          >

            <p className="hero-greeting">
              Hello, I'm
            </p>

            <h1>
              Hazel Joy Casilang
            </h1>

            <h2>
              IT Graduate <span>|</span> VA & Web Development
            </h2>

            <p className="hero-description">
              IT graduate with an interest in web development,
              administrative support, data management, and creating
              practical digital solutions.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My Projects
                <ArrowRight size={17} />
              </a>

              <a
                href="/assets/resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <Download size={17} />
              </a>

            </div>

          </div>


          <div
            className="hero-image-wrapper"
            data-reveal="right"
          >

            <img
              src="/assets/profile-home.jpeg"
              alt="Hazel Joy Casilang"
              className="profile-image"
            />

          </div>

        </section>



        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="about-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into practical solutions.
            </h2>

          </div>


          <div className="about-content">

            <div
              className="about-image-wrapper"
              data-reveal="left"
            >

              <img
                src="/assets/profile-about.jpeg"
                alt="Hazel Joy Casilang"
                className="profile-image"
              />

            </div>


            <div
              className="about-text"
              data-reveal="right"
            >

              <p>
                I'm an Information Technology graduate with an interest
                in web development, administrative support, data
                management, and creating practical digital solutions.
              </p>

              <p>
                I enjoy creating systems and digital experiences that
                are functional, organized, and easy to use. Throughout
                my studies, I worked on projects involving web
                applications, mobile applications, databases, and
                system design.
              </p>

              <p>
                I'm currently looking for opportunities where I can
                apply my technical and administrative skills, continue
                learning, and contribute to a professional team.
              </p>


              <div className="about-highlights">

                <div className="highlight-item">

                  <span>
                    01
                  </span>

                  <div>

                    <h3>
                      Detail-Oriented
                    </h3>

                    <p>
                      Focused on accuracy, organization, and quality
                      in every task.
                    </p>

                  </div>

                </div>


                <div className="highlight-item">

                  <span>
                    02
                  </span>

                  <div>

                    <h3>
                      User-Focused
                    </h3>

                    <p>
                      Interested in creating simple and intuitive
                      digital experiences.
                    </p>

                  </div>

                </div>


                <div className="highlight-item">

                  <span>
                    03
                  </span>

                  <div>

                    <h3>
                      Always Learning
                    </h3>

                    <p>
                      Continuously developing both technical and
                      professional skills.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =========================
            INTERNSHIP / EXPERIENCE
        ========================= */}

        <section
          id="internship"
          className="internship-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              Internship Experience
            </h2>

          </div>


          <div className="internship-content">


            {/* LEFT — PHOTO */}

            <div
              className="internship-image-wrapper"
              data-reveal="left"
            >

              <img
                src="/assets/dti-internship.jpg"
                alt="DTI Negosyo Center Internship"
                className="internship-image"
              />

            </div>


            {/* RIGHT — INFORMATION */}

            <div
              className="internship-details"
              data-reveal="right"
            >

              <p className="experience-label">
                Data Entry / Administrative Assistant
              </p>

              <h3>
                DTI – Negosyo Center
              </h3>


              <div className="experience-meta">

                <div>
                  <CalendarDays size={16} />
                  <span>
                    Jan 2026 – Jun 2026
                  </span>
                </div>

                <div>
                  <MapPin size={16} />
                  <span>
                    Maninding, Sta. Barbara, Pangasinan
                  </span>
                </div>

                <div>
                  <FileText size={16} />
                  <span>
                    720 Internship Hours
                  </span>
                </div>

              </div>


              <p className="internship-description">
                Completed a 720-hour internship supporting business
                registration, data management, reporting, and
                administrative operations at the DTI Negosyo Center.
              </p>


              <ul className="internship-tasks">

                <li>
                  Processed business name applications and renewals
                  through the DTI BNRS portal.
                </li>

                <li>
                  Encoded and updated client and business records
                  using Microsoft Excel.
                </li>

                <li>
                  Prepared and verified monthly operational reports.
                </li>

                <li>
                  Maintained confidentiality and accuracy of client
                  records and administrative documents.
                </li>

              </ul>


              <a
                href="/assets/dti-certificate.pdf"
                className="certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                View Internship Certificate
              </a>

            </div>

          </div>

        </section>



        {/* =========================
            PROJECTS
        ========================= */}

        <section
          id="projects"
          className="projects-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              PROJECTS
            </p>

            <h2>
              Selected Projects & Contributions
            </h2>

          </div>


          <div className="projects-grid">


            {/* PROJECT 01 */}

            <article
              className="project-card"
              data-reveal
            >

              <div className="project-image">

                <span>
                  PROJECT 01
                </span>

              </div>


              <div className="project-content">

                <p className="project-role">
                  CAPSTONE PROJECT • PROJECT LEADER
                </p>

                <h3>
                  Online Public Access Catalog (OPAC)
                </h3>

                <p>
                  A web-based library catalog developed for
                  Philippine College of Science and Technology
                  (PHILCST) to help users search for and check
                  the availability of library resources.
                </p>


                <div className="project-tech">

                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Laravel</span>
                  <span>MySQL</span>

                </div>


                <div className="project-contributions">

                  <h4>
                    My Contributions
                  </h4>

                  <ul>

                    <li>
                      Led and coordinated the capstone team.
                    </li>

                    <li>
                      Managed project papers and documentation.
                    </li>

                    <li>
                      Assisted programmers during development.
                    </li>

                    <li>
                      Helped monitor testing and deployment.
                    </li>

                    <li>
                      Encoded and validated actual library data.
                    </li>

                  </ul>

                </div>


                <div className="project-links">

                  <a
                    href="https://opac-philcst.online/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>

                </div>

              </div>

            </article>



            {/* PROJECT 02 */}

            <article
              className="project-card"
              data-reveal
            >

              <div className="project-image">

                <span>
                  PROJECT 02
                </span>

              </div>


              <div className="project-content">

                <p className="project-role">
                  MOBILE APPLICATION
                </p>

                <h3>
                  Vault Music App
                </h3>

                <p>
                  A mobile music application that allows users
                  to browse songs, manage their own uploads, and
                  save favorite songs.
                </p>


                <div className="project-tech">

                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                  <span>Firestore</span>

                </div>


                <div className="project-links">

                  <a
                    href="https://github.com/xyxzl/Vault-Music"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </a>

                </div>

              </div>

            </article>



            {/* PROJECT 03 */}

            <article
              className="project-card"
              data-reveal
            >

              <div className="project-image">

                <span>
                  PROJECT 03
                </span>

              </div>


              <div className="project-content">

                <p className="project-role">
                  WEB APPLICATION
                </p>

                <h3>
                  Musify – Music Streaming Web System
                </h3>

                <p>
                  A web-based music streaming system that allows
                  users to browse, filter, and play music and video
                  content.
                </p>


                <div className="project-tech">

                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>MySQL</span>

                </div>


                <p className="project-extra">
                  Includes an admin panel for managing songs,
                  categories, and protected content with user
                  access restrictions.
                </p>


                <div className="project-links">

                  <a
                    href="https://github.com/xyxzl/musify.git"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </a>

                </div>

              </div>

            </article>

          </div>

        </section>



        {/* =========================
            SERVICES
        ========================= */}

        <section
          id="services"
          className="services-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              SERVICES
            </p>

            <h2>
              How I can help.
            </h2>

          </div>


          <div className="services-grid">


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                01
              </span>

              <h3>
                Data Entry
              </h3>

              <p>
                Accurate encoding, updating, organizing, and
                maintaining digital records and spreadsheets.
              </p>

            </div>


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                02
              </span>

              <h3>
                Administrative Support
              </h3>

              <p>
                Assistance with documentation, file organization,
                reports, and routine administrative tasks.
              </p>

            </div>


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                03
              </span>

              <h3>
                Email Management
              </h3>

              <p>
                Organizing emails, managing messages, and keeping
                communication structured and easy to track.
              </p>

            </div>


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                04
              </span>

              <h3>
                Calendar Management
              </h3>

              <p>
                Organizing schedules, appointments, reminders,
                and important activities.
              </p>

            </div>


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                05
              </span>

              <h3>
                Research & Documentation
              </h3>

              <p>
                Gathering information, organizing findings, and
                preparing clear and structured documentation.
              </p>

            </div>


            <div
              className="service-card"
              data-reveal
            >

              <span className="service-number">
                06
              </span>

              <h3>
                Web Development
              </h3>

              <p>
                Creating basic, responsive websites and practical
                web solutions with a focus on usability.
              </p>

            </div>

          </div>

        </section>



        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="skills-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              SKILLS
            </p>

            <h2>
              Technical knowledge and professional strengths.
            </h2>

          </div>


          <div className="skills-grid">


            {/* WEB DEVELOPMENT */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                01
              </span>

              <h3>
                Web Development
              </h3>

              <div className="skill-list">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>PHP</span>

              </div>

            </div>


            {/* BACKEND */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                02
              </span>

              <h3>
                Backend / Database
              </h3>

              <div className="skill-list">

                <span>MySQL</span>
                <span>Firebase</span>
                <span>Firestore</span>
                <span>SQL</span>

              </div>

            </div>


            {/* MOBILE */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                03
              </span>

              <h3>
                Mobile Development
              </h3>

              <div className="skill-list">

                <span>Flutter</span>
                <span>Dart</span>

              </div>

            </div>


            {/* PRODUCTIVITY */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                04
              </span>

              <h3>
                Productivity / IT
              </h3>

              <div className="skill-list">

                <span>Microsoft Excel</span>
                <span>Microsoft Word</span>
                <span>Microsoft PowerPoint</span>
                <span>Figma</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Data Management</span>
                <span>System Documentation</span>

              </div>

            </div>


            {/* AI TOOLS */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                05
              </span>

              <h3>
                AI & Digital Tools
              </h3>

              <div className="skill-list">

                <span>ChatGPT</span>
                <span>Claude</span>

              </div>

              <p className="skill-note">
                Used as productivity and research assistance
                tools for organizing information and improving
                workflow efficiency.
              </p>

            </div>


            {/* SOFT SKILLS */}

            <div
              className="skill-card"
              data-reveal
            >

              <span className="skill-number">
                06
              </span>

              <h3>
                Soft Skills
              </h3>

              <div className="skill-list">

                <span>Attention to Detail</span>
                <span>Communication</span>
                <span>Time Management</span>
                <span>Problem Solving</span>
                <span>Team Collaboration</span>
                <span>Adaptability</span>

              </div>

            </div>

          </div>

        </section>



        {/* =========================
            EDUCATION
        ========================= */}

        <section
          id="education"
          className="education-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              EDUCATION
            </p>

            <h2>
              Academic Background
            </h2>

          </div>


          <div
            className="education-card"
            data-reveal
          >

            <div className="education-year">
              2022 — 2026
            </div>

            <div className="education-content">

              <p className="education-label">
                COLLEGE
              </p>

              <h3>
                Philippine College of Science and Technology
              </h3>

              <p className="education-degree">
                Bachelor of Science in Information Technology
              </p>

              <p className="education-date">
                August 2022 – June 2026
              </p>

            </div>

          </div>

        </section>



        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <section
          id="certifications"
          className="certifications-section"
        >

          <div
            className="section-heading"
            data-reveal
          >

            <p className="section-label">
              CERTIFICATION
            </p>

            <h2>
              Certifications & Credentials
            </h2>

          </div>


          <div className="certifications-grid">


            <div
              className="certification-card"
              data-reveal
            >

              <div className="certification-icon">
                <FileText size={22} />
              </div>

              <div>

                <p className="certification-label">
                  TESDA
                </p>

                <h3>
                  Computer System Servicing NC II
                </h3>

                <p>
                  Sep 2024 – Sep 2029
                </p>

              </div>

            </div>


            <div
              className="certification-card"
              data-reveal
            >

              <div className="certification-icon">
                <FileText size={22} />
              </div>

              <div>

                <p className="certification-label">
                  CERTIFICATION
                </p>

                <h3>
                  Cyberthreat Monitoring Level 1
                </h3>

                <p>
                  July 2026
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div
            className="contact-content"
            data-reveal
          >

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              Let's Connect.
            </h2>

            <p>
              I'm open to opportunities where I can learn,
              contribute, and grow as an IT professional.
            </p>


            <div className="contact-options">


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/hazeljoycasilang"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-option"
              >

                <FaLinkedin size={19} />

                <span>
                  LinkedIn
                </span>

              </a>


              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/hazel.joy.casilang"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-option"
              >

                <FaFacebookF size={18} />

                <span>
                  Facebook
                </span>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:hazeljoycslng@gmail.com"
                className="contact-option"
              >

                <Mail size={19} />

                <span>
                  Email
                </span>

              </a>

            </div>

          </div>

        </section>

      </main>



      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <p>
          © 2026 Hazel Joy Casilang | IT Graduate | VA | Web Development.
        </p>

      </footer>

    </>
  )
}

export default App
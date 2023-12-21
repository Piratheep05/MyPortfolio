import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ecommerce from '../assets/img/ecommerce.PNG';
import Auriga1 from '../assets/img/Auriga1.PNG';
import ConDashboard from '../assets/img/ConDashboard.PNG';
import Mas from '../assets/img/Mas.PNG';
import youtubeClone from '../assets/img/youtubeClone.PNG';
import Resturent from '../assets/img/Resturent.PNG';
import strechline from '../assets/img/strechline.PNG';
import Admin1 from '../assets/img/Admin1.PNG';
import hotelPage from '../assets/img/hotelPage.PNG';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'E-commerce website',
      description: 'FullStack Development',
      imgUrl: ecommerce,
    },
    {
      title: 'Admin dashboard',
      description: 'Design & Development',
      imgUrl: Auriga1,
    },
    {
      title: 'Configurable dashboard',
      description: 'Design & Development',
      imgUrl: ConDashboard,
    },
    {
      title: 'Mas AdminDashboard',
      description: 'Design & Development',
      imgUrl: Mas,
    },
    {
      title: 'youtubeClone',
      description: 'Design & Development',
      imgUrl: youtubeClone,
    },
    {
      title: 'Resturent web',
      description: 'Design & Development',
      imgUrl: Resturent,
    },
  ];

  const project2 = [
    {
      title: 'strechline Admin Panel',
      description: 'Front-end Development',
      imgUrl: strechline,
    },
    {
      title: 'Sample Admin Panel',
      description: 'Front-end Development',
      imgUrl: Admin1,
    },
    {
      title: 'Hotel webPage',
      description: 'Front-end Development',
      imgUrl: hotelPage,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Showing all projects. Check out my latest web software
                    Development portfolio projects.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          I will try to have a good career, and I hope your
                          company gives me that perfect opportunity. During my
                          work, I learned html,css,javascript,React JS, NodeJS,
                          SQL,PHP and how to work with any programming language.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='colorSharp2'
      ></img>
    </section>
  );
};

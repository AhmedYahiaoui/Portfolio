import React, {useState, useLayoutEffect} from 'react';
import { collection, doc, getDoc, onSnapshot, orderBy, query} from 'firebase/firestore'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { db} from './firebase'
import Project from './pages/project';

export default function App() {

  const [profile, setProfile] = useState([])
  const [skills, setSkills] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])

  window.profile = profile; 
  window.skills = skills; 
  window.testimonials = testimonials; 
  window.projects = projects; 
  window.experiences = experiences; 

  useLayoutEffect(() => {
    try {

      const getProfileData = async () => {
        const docRef = doc(
          db,
         '/profile/wpsdKINC8Yy4eSHNmqzw'
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setProfile(() => ({ ...docSnap.data() }));
        }
      };

      const getSkillsData = async () => {
        const docRef = doc(
          db,
         '/skills/Rs3Gwqj7AaOc3JS4luQi'
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSkills(docSnap.data());
          setSkills(() => ({ ...docSnap.data() }));
        }
      };

      const getTestimonialsData = async () => {
        const q = query(collection(db, 'TESTIMONIALS'))
        onSnapshot(q, (querySnapshot) => {
          if (querySnapshot.docs.length>0) {
            setTestimonials(querySnapshot.docs.map(testimonial => ({
              data: testimonial.data()
            })))
          }
        });
      };

      // ,orderBy('order','asc')


      const getProjectsData = async () => {
        const q = query(collection(db, 'projects')
        )
        onSnapshot(q, (querySnapshot) => {
          if (querySnapshot.docs.length>0) {
            setProjects(
              querySnapshot.docs.map(project =>
                ({
                  data: project.data()
                }),
              ),
            );
          }
        });
      };

      const getExperiencesData = async () => {
        const q = query(
          collection(db, 'experiences'),orderBy('order','asc')
        );

        onSnapshot(q, (querySnapshot) => {
          if (querySnapshot.docs.length>0) {
            setExperiences(querySnapshot.docs
              .map(experience => ({
                data: experience.data()
              }),
            ),
            )
          }
        })
      };

      getProfileData();
      getSkillsData();
      getTestimonialsData()
      getProjectsData()
      getExperiencesData()
    } catch (error) {
      console.log({ error });
    }
  }, []);

  console.error = (error) => {
    if ( error.includes('Unsupported style property')) {
      return;
    }
    return (error);
  };

  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/portfolio">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}


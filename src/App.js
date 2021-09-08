import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#Q1">What is React?</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#Q2">SPA VS<br /> MPA</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Q3">Angular VS<br /> React</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Q4">Library VS<br />Framework</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Q5">Virtual DOM VS<br />Real DOM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Q6">One Way VS<br /> Two Way</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="px-5 mt-2">
        <div id="Q1">
          <h3>React</h3>
          <p>React is a front-end open-source JavaScript library developed for building User Interfaces or User Components. React lets you develop complex UI from small and isolated components. React was initially released by Facebook in 2013 but now it is maintained by Facebook and a community of individual developers and companies. </p>
          <h5>Why should we use React?</h5>
          <p>React allows developers to create a large web application that can change data without reloading the webpage in browser. There are many features that make the library hold such influence on the webpage and makes React standout among other frameworks and libraries. </p>
        </div>
        <div className="mt-2" id="Q2">
          <h3>Single Page Application (SPA) vs Multiple Page Application (MPA): </h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="text-center fs-5">
                <tr>
                  <th>SPA</th>
                  <th>MPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A SPA is an app that needs to be loaded once only and whenever there is a change in state of webpage it does not need to be reloaded. </td>
                  <td>A MPA is a classical and traditional approach of an app. It’s design patterns requires to load a page every time whenever there is a change in states of application. </td>
                </tr>
                <tr>
                  <td>In terms of speed SPA is better than MPA because user’s attention span is getting shorter and shorter, and we became more impatient. SPA loads faster because it loads the majority of the resources when the application was initially started. </td>
                  <td>MPA reloads the entire page from scratch whenever the user wants to load a piece of information or wants to move from one section of the page to another section of the page. Every time the entire page will be loaded. </td>
                </tr>
                <tr>
                  <td>When it comes to SEO (Search Engine Optimization), SPA becomes tricky because the entire application is working on a single webpage and changes data accordingly to the customer performed instructions.
                    It is not as friendly as MPA in SEO. </td>
                  <td>MPA enables better website positioning in SEO, as each page can be optimized by defining sets of keywords. This helps in better ranking of websites in Google like search engines. </td>
                </tr>
                <tr>
                  <td>In security, SPAs are more likely to suffer from a hacking attack because the entire application is running in scripting language and hackers basically targets those scripts which could result in loss or leak of sensitive data. </td>
                  <td>As the number of pages increases on a website the more effort it takes to secure each page of website. If you go for an MPA, then you will have to secure every webpage. </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="Q3" className="mt-2">
          <h3>Angular vs React</h3>
          <div className="table-responsive">
            <table className="table-striped table table-hover">
              <thead className="text-center fs-5">
                <tr>
                  <th>Angular</th>
                  <th>React</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Angular or Angular JS is a structural framework for developing complete web applications. </td>
                  <td>React or ReactJS is a JavaScript library that allows you to build each component of your User Interface individually. </td>
                </tr>
                <tr>
                  <td>Angular uses the concept of MVC (Models Views Controller). </td>
                  <td>React is based on Virtual DOM. </td>
                </tr>
                <tr>
                  <td>Angular is based on TypeScript Programming. </td>
                  <td>React is based on JavaScript Programming. </td>
                </tr>
                <tr>
                  <td>Angular provides testing and debugging of entire project within a single tool. </td>
                  <td>React relies on using other tools to debug and perform different types of tests. </td>
                </tr>
                <tr>
                  <td>As we know, Angular is a complete framework though it is not easy to grasp when compared with React. </td>
                  <td>It is easier to learn when compared with Angular. </td>
                </tr>
                <tr>
                  <td>It’s first build was released in 2010 by Google.</td>
                  <td>Its first open-source build was released in 2013 by Facebook. </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="Q4" className="mt-2">
          <h3>Library vs Framework</h3>
          <div className="table-responsive">
            <table className="table-striped table table-hover">
              <thead className="text-center fs-5">
                <tr>
                  <th>Library</th>
                  <th>Framework</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Library is a collection of pre-defined programs or instructions.</td>
                  <td>A framework defines how a complete application should be developed </td>
                </tr>
                <tr>
                  <td>In a library, the developer can make a call to the library whenever they want. </td>
                  <td>In a framework, the developer is fully incorporated in its workflow. Therefore, the entire process is controlled by the framework rather than developers. </td>
                </tr>
                <tr>
                  <td>For Example: React is a library.  </td>
                  <td>For Example: Angular is a framework.  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="Q5" className="mt-2">
          <h3>Virtual DOM vs Real DOM</h3>
          <p>DOM is the essential aspect to the web applications (It represents the structure of document web page, mostly HTML). Imagine that you have an application and whenever there’s a change in state, it only updates the DOM where the change is occurred rather than loading the entire DOM again because it would result in decreasing the performance of UX of our webpage. React works with a feature known as Virtual DOM, a virtual representation of Real DOM (DOM used in browser) is stored in memory, or we can say that it makes a copy of Real DOM elements and stored it in memory. </p>
          <p>Applying changes in Virtual DOM would be faster because it will never be rendered to the user, It will only live-in memory. When your React app loads, React will create a copy of Real DOM tree. When there is a change in the state of your application, instead of rendering entire Real DOM, React will first apply those changes in Virtual DOM. Then it will compare the Virtual DOM and Real DOM to determine what part of the DOM needs to be changed. Then it will apply those changes only that needs to be applied in Real DOM, nothing else. </p>
        </div>
        <div id="Q6" className="mt-2">
          <h3>One Way Data Binding vs Two Way Data Binding</h3>
          <div className="table-responsive">
            <table className="table-striped table table-hover">
              <thead className="text-center fs-5">
                <tr>
                  <th>One Way</th>
                  <th>Two Way</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>As the name suggests, data is bound to flow only in one direction.</td>
                  <td>In two-way data is allowed to flow in bidirectional. </td>
                </tr>
                <tr>
                  <td>Any change in component’s data gets reflected in UI.
                    OR
                    Any change in UI will get reflected inside the component’s logic. </td>
                  <td>Change in UI will get reflected inside the component’s logic.
                    AND
                    Change in component’s data gets reflected in UI. </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}


export default App;

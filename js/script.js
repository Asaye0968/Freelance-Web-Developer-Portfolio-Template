let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Asaye </a>
              <p>I’m Asaye , a junior and talented Web Designer with front end development skills.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:Asayemax1921@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                Asayemax1921@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li><a href="about.html">About Me</a></li>
              </ul>
            </div>

            <!-- changes hassen made are her below(to undo uncomment these lines)-->
           <-- <div class="social-links text-center"> v
              <a href="https://t.me/Bezawetalemn/"><img src="./img/TG.PNG" alt="Telegram"></a><br>
              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a><br> -->
              <a href="https://www.fiverr.com/asayemax?up_rollout=true"> <img src="img/fiverr.png" alt="feverr"></a><br>
              <a href="https://github.com/Asaye0968"><img src="./img/GitHub.png" alt="github"></a>  
              <--!<a href="https://www.instagram.com/asayemax1921?igsh=YzljYTk1ODg3Zg=="><img src="js/insta.png" alt="Instagram"></a>  -->
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);

const d = document,
  $nav = d.getElementById('nav');

let { pathname } = location;

if (pathname.includes('index.html')) {
  $nav.innerHTML = `
    <div class="navigation">
      <ul>
        <li class="list active">
          <a href="index.html">
            <span class="icon">
              <ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon>
            </span>
            <span class="title">Home</span>
          </a>
        </li>

        <li class="list">
          <a href="portfolio.html">
            <span class="icon">
              <ion-icon name="folder-open-outline"></ion-icon>
            </span>
            <span class="title">Portfolio</span>
          </a>
        </li>

        <li class="list">
          <a href="contact.html">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Contact</span>
          </a>
        </li>

        <li class="list">
          <a href="skills.html">
            <span class="icon">
              <ion-icon name="code-slash-outline"></ion-icon>
            </span>
            <span class="title">Skills</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="toggle">
      <ion-icon name="menu-outline" class="open md hydrated" role="img" aria-label="menu outline"></ion-icon>
      <ion-icon name="close-outline" class="close md hydrated" role="img" aria-label="close outline"></ion-icon>
    </div>

    <div class="on-off">
      <ion-icon name="eye-off-outline" class="off"></ion-icon>
      <ion-icon name="eye-outline" class="on"></ion-icon>
    </div>
  `;
} else if (pathname.includes('portfolio.html')) {
  $nav.innerHTML = `
    <div class="navigation">
      <ul>
        <li class="list">
          <a href="index.html">
            <span class="icon">
              <ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon>
            </span>
            <span class="title">Home</span>
          </a>
        </li>

        <li class="list active">
          <a href="portfolio.html">
            <span class="icon">
              <ion-icon name="folder-open-outline"></ion-icon>
            </span>
            <span class="title">Portfolio</span>
          </a>
        </li>

        <li class="list">
          <a href="contact.html">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Contact</span>
          </a>
        </li>

        <li class="list">
          <a href="skills.html">
            <span class="icon">
              <ion-icon name="code-slash-outline"></ion-icon>
            </span>
            <span class="title">Skills</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="toggle">
      <ion-icon name="menu-outline" class="open md hydrated" role="img" aria-label="menu outline"></ion-icon>
      <ion-icon name="close-outline" class="close md hydrated" role="img" aria-label="close outline"></ion-icon>
    </div>

    <div class="on-off">
      <ion-icon name="eye-off-outline" class="off"></ion-icon>
      <ion-icon name="eye-outline" class="on"></ion-icon>
    </div>
  `;
} else if (pathname.includes('contact.html')) {
  $nav.innerHTML = `
    <div class="navigation">
      <ul>
        <li class="list">
          <a href="index.html">
            <span class="icon">
              <ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon>
            </span>
            <span class="title">Home</span>
          </a>
        </li>

        <li class="list">
          <a href="portfolio.html">
            <span class="icon">
              <ion-icon name="folder-open-outline"></ion-icon>
            </span>
            <span class="title">Portfolio</span>
          </a>
        </li>

        <li class="list active">
          <a href="contact.html">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Contact</span>
          </a>
        </li>

        <li class="list">
          <a href="skills.html">
            <span class="icon">
              <ion-icon name="code-slash-outline"></ion-icon>
            </span>
            <span class="title">Skills</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="toggle">
      <ion-icon name="menu-outline" class="open md hydrated" role="img" aria-label="menu outline"></ion-icon>
      <ion-icon name="close-outline" class="close md hydrated" role="img" aria-label="close outline"></ion-icon>
    </div>

    <div class="on-off">
      <ion-icon name="eye-off-outline" class="off"></ion-icon>
      <ion-icon name="eye-outline" class="on"></ion-icon>
    </div>
  `;
} else if (pathname.includes('skills.html')) {
  $nav.innerHTML = `
    <div class="navigation">
      <ul>
        <li class="list">
          <a href="index.html">
            <span class="icon">
              <ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon>
            </span>
            <span class="title">Home</span>
          </a>
        </li>

        <li class="list">
          <a href="portfolio.html">
            <span class="icon">
              <ion-icon name="folder-open-outline"></ion-icon>
            </span>
            <span class="title">Portfolio</span>
          </a>
        </li>

        <li class="list">
          <a href="contact.html">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">Contact</span>
          </a>
        </li>

        <li class="list active">
          <a href="skills.html">
            <span class="icon">
              <ion-icon name="code-slash-outline"></ion-icon>
            </span>
            <span class="title">Skills</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="toggle">
      <ion-icon name="menu-outline" class="open md hydrated" role="img" aria-label="menu outline"></ion-icon>
      <ion-icon name="close-outline" class="close md hydrated" role="img" aria-label="close outline"></ion-icon>
    </div>

    <div class="on-off">
      <ion-icon name="eye-off-outline" class="off"></ion-icon>
      <ion-icon name="eye-outline" class="on"></ion-icon>
    </div>
  `;
}

setTimeout(() => {
  let $list = d.querySelectorAll('.list'),
    $menuToggle = d.querySelector('.toggle'),
    $navigation = d.querySelector('.navigation'),
    $onOff = d.querySelector('.on-off');

  for (let i = 0; i < $list.length; i++) {
    $list[i].onclick = function () {
      let j = 0;
      while (j < $list.length) {
        $list[j++].className = 'list';
      }
      $list[i].className = 'list active';
    }
  }

  $menuToggle.addEventListener('click', (e) => {
    $menuToggle.classList.toggle('active');
    $navigation.classList.toggle('active');
  });

  $onOff.addEventListener('click', (e) => {
    $onOff.classList.toggle('active');
    $navigation.classList.toggle('hidden');
  });
}, 1000);
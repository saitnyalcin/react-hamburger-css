import React from 'react';
import './Menu.css';

function App() {
  return (
    <div>
      <header>
        <a
          href="#main-menu"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <span className="fa fa-bars" aria-hidden="true"></span>
        </a>

        <h1 className="logo">hamburgers</h1>

        <nav id="main-menu" className="main-menu" aria-label="Main menu">
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className="menu-close"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <span className="fa fa-close" aria-hidden="true"></span>
          </a>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          href="#main-menu-toggle"
          className="backdrop"
          tabIndex="-1"
          aria-hidden="true"
          hidden
        ></a>
      </header>

      <article>
        <h2>Hamburgers are delicious</h2>
        <p>
          Even better is bacon...ipsum dolor amet kielbasa sirloin pancetta
          andouille biltong jowl brisket corned beef turducken flank. Andouille
          corned beef shank tongue leberkas turducken cow pork chop salami
          bresaola frankfurter shankle. Pork belly porchetta prosciutto,
          pancetta meatloaf cow frankfurter pork chuck biltong boudin ball tip
          ham. Corned beef pig beef ribs burgdoggen.
        </p>

        <p>
          Flank jerky tri-tip strip steak tail biltong. Tongue chicken
          burgdoggen, leberkas ham hock landjaeger sausage cupim shankle strip
          steak ribeye tenderloin jowl. Pork drumstick flank pork loin,
          tenderloin chuck pastrami kielbasa brisket kevin cow swine strip
          steak. Picanha shoulder t-bone burgdoggen, alcatra tongue tail ham
          hock bacon meatloaf rump shankle. Boudin ham leberkas burgdoggen
          ground round short ribs chicken pancetta meatloaf picanha t-bone.
          Short loin rump strip steak, short ribs cupim tongue pancetta flank
          ball tip tail.
        </p>

        <p>
          Alcatra jowl biltong kevin, shankle ham hock sausage turducken
          andouille. Ribeye prosciutto turkey flank, picanha kielbasa ball tip.
          Shoulder tenderloin bresaola, corned beef boudin capicola burgdoggen
          t-bone bacon short loin hamburger drumstick. Beef pork belly biltong
          sausage jerky picanha frankfurter boudin beef ribs cupim capicola
          salami. Biltong alcatra sirloin, kevin frankfurter short loin doner
          beef ribs landjaeger sausage venison. Shoulder t-bone ham hock pig.
        </p>

        <p>
          Brisket beef spare ribs, pastrami pancetta bresaola pig short loin
          flank t-bone. Porchetta biltong filet mignon pork loin picanha shank
          kielbasa boudin sausage alcatra. Ball tip bresaola salami tail
          meatloaf shoulder short ribs pancetta pork loin venison, picanha
          tongue pig turkey. Rump filet mignon sausage ribeye biltong. Short
          ribs pork chop corned beef, venison kevin pork loin tail strip steak
          ham hock porchetta.
        </p>

        <p>
          Cow beef ribs ham hock ball tip bacon pork belly. Shank beef
          tenderloin landjaeger. Pork loin shank drumstick ball tip, turkey pig
          ground round kevin t-bone chicken. Ham hock chicken ribeye jowl pork
          belly bresaola. Sausage leberkas landjaeger ham pork belly bresaola
          short ribs burgdoggen shank jowl capicola kielbasa swine. Pork belly
          leberkas boudin tail. Pork chop cow leberkas tenderloin corned beef,
          shankle ham hock cupim tail chuck jerky rump.
        </p>
      </article>
    </div>
  );
}

export default App;

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Refactored Layout created by:
        <br />
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
      <p className="text-lg text-gray-400">
        Made using: <br />
        <a className="text-white" href="https://tailwindcss.com/">
          Tailwind
        </a>{" "}
        <br />
        and <br />
        <a className="text-white" href="https://daisyui.com/">
          daisyUI
        </a>
      </p>
    </>
  );
}

export default About

(() => {
  const holes = document.querySelectorAll('.hole');

  const getStat = (id) => {
    return parseInt(document.getElementById(id).textContent);
  };

  const setStat = (id, value) => {
    document.getElementById(id).textContent = value.toString();
  };

  const resetStats = () => {
    setStat('dead', 0);
    setStat('lost', 0);
  };

  const createClickHandler = (id, limit, alertMessage) => {
    return () => {
      let currentCount = getStat(id) + 1;
      if (currentCount >= limit) {
        alert(alertMessage);
        resetStats();
      } else {
        setStat(id, currentCount);
      }
    };
  };

  const handleMoleKilled = createClickHandler('dead', 10, 'You win!');
  const handleMissfire = createClickHandler('lost', 5, 'You lose!');

  holes.forEach(hole => {
    hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has-mole')) {
        handleMoleKilled();
      } else {
        handleMissfire();
      }
    });
  });
})();

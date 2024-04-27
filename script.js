const scrollToTarget = () => {
    const targetElement = document.getElementById('targetText');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToTargetcontact = () => {
    const targetElement = document.getElementById('targetContact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
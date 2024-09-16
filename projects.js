// Voting Functionality for Crowdsourced Projects

function vote(button) {
    const voteCountElement = button.nextElementSibling;
    let voteCount = parseInt(voteCountElement.textContent.split(' ')[0], 10);
    
    voteCount += 1;
    voteCountElement.textContent = `${voteCount} Votes`;
}

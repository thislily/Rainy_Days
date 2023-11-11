
//create html to display when an error occurs
export function displayError(message = "Unknown error") {
    return `<div class="error-message">
                <h2>Oops! Something has gone wrong!</h2>
                <div>
                    <img src="../../images/icons/sad-raccoon.svg" alt="a sad raccoon"/>
                    <p>${message}</p>
                </div>
            </div>`;
}

const repositories = null;
fetch('https://api.github.com/users/Wirus006/repos?sort=created')
    .then(resp => resp.json())
    .then(resp => {
        for(let repo of resp) {
            const {name, html_url, description, forks_count} = repo;
            const repositoryList = document.querySelector('.repositories--js');
            if(description == null) {
                description = "Brak opisu."
            }
            let myTemplate = `
            <li class="repositories__item">
            <article class="repositories__about">
                <h2 class="repositories__title"><a class="repositories__link" href="${html_url}">${name}</a></h2>
                <div class="repositories__div">
                    <p class="repositories__describe">
                        ${description}
                    </p>
                    <p class="repositories__forks">forks: ${forks_count}</p>
                </div>
            </article>
            </li>
            `;
            repositoryList.innerHTML += myTemplate; 
        }
    })
    .catch(error => {
        console.log(`nie udało się pobrać danych: ${error}`);
    })
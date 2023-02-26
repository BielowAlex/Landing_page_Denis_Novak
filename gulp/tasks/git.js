import ghPages from 'gh-pages'

export const git = () => {
    return ghPages.publish(`../portfolio-denis-novik`, {
        branch: 'gulp',
        repo: 'https://github.com/BielowAlex/Landing_page_Denis_Novak.git',
    })
}
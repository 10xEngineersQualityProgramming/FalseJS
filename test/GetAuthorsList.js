// this is for the authors list in AUTHORS.MD and in the code comments on index.ts

const fetch = require("node-fetch").default
const { exec } = require("node:child_process")
const execPromise = require("node:util").promisify(exec)

async function getAuthors() {
  try {
    const { stdout } = await execPromise("npm ls --json")
    const contents = JSON.parse(stdout)
    const packages = Object.keys(contents.dependencies)

    const batchSize = 10
    const batches = []

    for (let i = 0; i < packages.length; i += batchSize) {
      batches.push(packages.slice(i, i + batchSize))
    }

    let authors = []

    for (const batch of batches) {
      const promises = batch.map((thepackage) => {
        return fetch(`https://registry.npmjs.org/${thepackage}`)
          .then((response) => response.json())
          .then((data) => {
            const author = data.maintainers?.[0]?.name
            console.debug(`Fetched author for ${thepackage}: ${author}`)
            return author
          })
          .catch((error) => {
            console.error(`Error fetching author for ${thepackage}:`, error)
            return null
          })
      })

      const batchAuthors = await Promise.all(promises)
      authors.push(...batchAuthors)
    }

    authors = [...new Set(authors.toSorted())]

    console.log(arrayToStringList(authors))
  } catch (error) {
    console.error(error)
  }
}

getAuthors()
function arrayToStringList(arr) {
  if (arr.length === 0) {
    return ""
  } else if (arr.length === 1) {
    return arr[0]
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`
  } else {
    const lastElement = arr.pop()
    const joinedString = arr.join(", ")
    return `${joinedString}, and ${lastElement}`
  }
}

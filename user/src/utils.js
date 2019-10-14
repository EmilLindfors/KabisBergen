//transforms and optimizes images uploaded though forms into sheet
/*  imageFile: {
        type: `File`,
        async resolve(source, args, context, info) {
          const result = await fetch(
            `https://drive.google.com/uc?export=view&${
              source.avatar.split("?")[1]
            }`
          ).then(function(response) {
            reporter.info("Headers: ", response.headers)
            return response.headers
          })
          reporter.info("Response: ", result)

          return createRemoteFileNode({
            url: result,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },*/

export const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
  return `${slug}`.replace(/\/\/+/g, "/")
}

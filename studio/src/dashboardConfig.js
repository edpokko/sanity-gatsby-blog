export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8796ea23cdfa188fd3da57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fy1j6i9v',
                  apiId: '7b070cab-118e-4fe9-8810-4eab4fedd59e'
                },
                {
                  buildHookId: '5f8796e9d161ad1a2401336c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3f6fkh1x',
                  apiId: 'ca2ad66a-33da-4d62-aafe-86438144993f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edpokko/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3f6fkh1x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

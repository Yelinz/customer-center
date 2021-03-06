import Route from '@ember/routing/route'
import { hash } from 'rsvp'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Route.extend({
  i18n: service(),

  breadCrumb: computed('controller.model.project.name', function() {
    return { title: this.get('controller.model.project.name') }
  }),

  model({ project }) {
    return hash({
      reports: this.store.query('timed-report', {
        project,
        include: 'user',
        ordering: '-date'
      }),
      orders: this.store.query('timed-subscription-order', {
        project,
        ordering: '-ordered'
      }),
      project: this.store.findRecord('timed-subscription-project', project, {
        include: 'billing_type,customer'
      })
    })
  }
})

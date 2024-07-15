import { ability } from '@saas/auth'

const userCanInviteSomeoneElese = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log('userCanInviteSomeoneElese: ', userCanInviteSomeoneElese)
console.log('userCanDeleteOtherUsers: ', userCanDeleteOtherUsers)
console.log('userCannotDeleteOtherUsers: ', userCannotDeleteOtherUsers)

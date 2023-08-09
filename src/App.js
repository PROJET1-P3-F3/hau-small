import React, { Suspense } from 'react'
import { CustomRoutes, Resource } from 'react-admin'

import { Route } from 'react-router-dom'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider.ts'

import polyglotI18nProvider from 'ra-i18n-polyglot'
import frenchMessages from 'ra-language-french'

import profile from './operations/profile'
import students from './operations/students'
import teachers from './operations/teachers'

import fees from './operations/fees'
import payments from './operations/payments'

import studentGrades from './operations/studentGrades'

import MyLayout from './HaLayout'
import HaLoginPage from './security/LoginPage'
import { mainTheme } from './haTheme'
import { grades } from './operations/grades'
import { Admin } from '@react-admin/ra-enterprise'
import transcripts from './operations/transcripts'

const FeeCreate = React.lazy(() => import('./operations/fees/FeesCreate'))
const App = () => (
  <Admin
    title='HEI Admin'
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={polyglotI18nProvider(() => frenchMessages, 'fr')}
    loginPage={HaLoginPage}
    layout={MyLayout}
    lightTheme={mainTheme}
    requireAuth
  >
    <Resource name='profile' />
    <Resource name='grades' />
    <Resource name='transcripts' />
    <Resource name='students' {...students} />
    <Resource name='teachers' {...teachers} />

    <Resource name='fees' {...fees} />
    <Resource name='payments' {...payments} />

    <Resource name='student-grades' {...studentGrades} />

    <CustomRoutes>
      {/* transcript */}
      <Route path='/students/:studentId/transcriptions/:transcriptId/show' element={<transcripts.show />} />
      <Route path='/students/:studentId/transcriptions/:transcriptId/edit' element={<transcripts.edit />} />
      <Route path='/students/:studentId/transcriptions' element={<transcripts.list />} />
      <Route path='/students/:studentId/transcriptions/create' element={<transcripts.create />} />
      {/* transcript */}

      <Route path='/profile' element={<profile.show />} />
      <Route path='/grades' element={<grades.show />} />

      <Route path='/students/:studentId/fees' element={<fees.list />} />

      <Route
        path='/students/:studentId/fees/create'
        element={
          <Suspense fallback='Veuillez patienter...'>
            <FeeCreate />
          </Suspense>
        }
      />
      <Route exact path='/fees/:feeId/show' element={<fees.show />} />
      <Route exact path='/fees' element={<fees.listByStatus />} />

      <Route exact path='/fees/:feeId/payments' element={<payments.list />} />
      <Route exact path='/fees/:feeId/payments/create' element={<payments.create />} />
    </CustomRoutes>
  </Admin>
)

export default App

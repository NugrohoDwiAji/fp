import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import FileDropzone from '@/components/admin/elements/FileDropZone'

export default function StrukturOrganisasi() {
  return (
    <AdminLayout>
      <FileDropzone onDrop={() => {}} />
    </AdminLayout>
  )
}
import TriageForm from '@/components/QuillForms/TriageForm';

export default function GetToKnow({ params }: { params: { id: string } }) {
    return <TriageForm id={params.id} />;
}

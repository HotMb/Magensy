export default function TestEnv() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test des variables d'environnement</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify({
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        }, null, 2)}
      </pre>
    </div>
  );
} 
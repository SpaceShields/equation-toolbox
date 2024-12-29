'use client';
import { createToolbox } from '@/lib/actions';
import { formSchema } from '@/lib/validation';
import { useRouter } from 'next/navigation';
import { Result } from 'postcss';
import React, { useState, useActionState } from 'react';
import { z } from 'zod';

const ToolboxForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const router = useRouter();
    
    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                link: formData.get('link') as string,
            }
            await formSchema.parseAsync(formValues);

            const result = await createToolbox(prevState, formData);

            if(result.status == "SUCCESS") {
                router.push(`/toolboxes/${result._id}`);
            }

            return result;

        } catch (error) {
            if(error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;

                setErrors(fieldErrors as unknown as Record<string, string>);
                console.log(errors);

                return { ...prevState, error: 'Validation failed', status: 'ERROR' };
            }

            return { 
                ...prevState,
                error: 'An unknown error has occured',
                status: 'ERROR',
             };
            
        }
    }
    
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: '',
        status: 'INITIAL'
    });
    

    

  return (
    <>
        <div className='max-w-4xl justify-self-center w-full px-10 py-1 rounded-2xl shadow-md shadow-primary'>
            <form action={formAction} className='toolbox-form'>
                <div className='w-full'>
                    <label htmlFor='title' className='toolbox-form_label'>
                        Title
                    </label><br />
                    <input 
                        id='title'
                        name='title' 
                        className='toolbox-form_input'
                        required
                        placeholder='Toolbox Title'
                    />
                    {errors.title && <p className='toolbox-form_error'>{errors.title}</p>}
                </div>
                <div className='w-full'>
                    <label htmlFor='description' className='toolbox-form_label'>
                        Description
                    </label><br />
                    <textarea 
                        id='description'
                        name='description' 
                        className='toolbox-form_textarea'
                        required
                        placeholder='Toolbox Description'
                    />
                    {errors.description && <p className='toolbox-form_error'>{errors.description}</p>}
                </div>
                <div className='w-full'>
                    <label htmlFor='link' className='toolbox-form_label'>
                        Image URL
                    </label><br />
                    <input 
                        id='link'
                        name='link' 
                        className='toolbox-form_input'
                        required
                        placeholder='Toolbox Cover Photo'
                    />
                    {errors.link && <p className='toolbox-form_error'>{errors.link}</p>}
                </div>
                <button type='submit' className='toolbox-form_btn text-center max-w-md' disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Submit Toolbox'}
                </button>
            </form>
        </div>
    </>
  )
}

export default ToolboxForm